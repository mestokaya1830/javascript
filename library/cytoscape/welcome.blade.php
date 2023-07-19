<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="{{ asset('main.css') }}">
</head>

<body>
  
    <div id="main-area"></div>
    <ul id="details">
        <header id="details-header">
            <span id="closeDetails">Kapat</span>
            <div id="header-title"></div>
            <p id="header-category"></p>
        </header>
        <div id="details-body"></div>
    </ul>
    <ul id="color-palet">
        <li><span class="color-palet-list" id="red"></span><span>1.Derece</span></li>
        <li><span class="color-palet-list" id="green"></span><span>2.Derece</span></li>
        <li><span class="color-palet-list" id="blue"></span><span>3.Derece</span></li>
    </ul>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.20.0/cytoscape.min.js"
        integrity="sha512-cjmYAonfXK+azDmWqvnqq8xmygHRHqVI7S0zuRxQnvcYVeoakwthRX6pPKoXfG1oIjDvMUtteRV9PhQjJwKWxQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script>
        let tt;
        const graphFunction = async () => {
            const data = await fetch('/getdata')
            const result = await data.json()
            const nodes = result.nodes.map(item => {
                return {
                    data: item
                }
            })
            const edges = result.edges.map(item => {
                return {
                    data: item
                }
            })
            let cy = cytoscape({
                container: document.getElementById('main-area'),
                elements: {
                    nodes: nodes,
                    edges: edges
                },
                layout: {
                    name: 'circle',
                    rows: 1
                },
                autounselectify: true,
                style: [
                  {
                        selector: 'node',
                        style: {
                            'shape': 'data(sh)',
                            'background-color': 'data(bg)',
                            'border-width': 'data(bw)',
                            'border-color': 'data(bc)',
                            'label': 'data(id)',
                            'font-family': 'Cambria',
                            fontSize: function(ele) {
                                return Math.max(1, Math.ceil(ele.degree() / 2)) * 6;
                            },
                            width: function(ele) {
                                return Math.max(1, Math.ceil(ele.degree() / 2)) * 4;
                            },
                            height: function(ele) {
                                return Math.max(1, Math.ceil(ele.degree() / 2)) * 4;
                            },
                        }
                    },

                    {
                        selector: 'edge',
                        style: {
                            'width': 1,
                            'curve-style': 'data(arrowline)',
                            'line-color': 'data(bg)',
                            'target-arrow-shape': 'triangle',
                            'target-arrow-color': 'data(bg)'
                        }
                    },
                    {
                        selector: ':selected',
                        style: {
                            'background-color': 'orange',
                        }
                    },

                    {
                        selector: 'node.highlight',
                        style: {
                            'border-color': '#FFF',
                            'border-width': '2px',
                            'font-size': '12px',
                            'width': '18px',
                            'height': '18px'
                        }
                    },
                    {
                        selector: 'node.semitransp',
                        style: {
                            'opacity': '0.1'
                        }
                    },
                    {
                        selector: 'edge.highlight',
                        style: {
                            'mid-target-arrow-color': '#FFF'
                        }
                    },
                    {
                        selector: 'edge.semitransp',
                        style: {
                            'opacity': '0.2'
                        }
                    }
                ]
            })
            tt = cy
            cy.on('tap', 'node', function(e) {
                getNodeDetails(e.target.id())
            })

            cy.on('mouseover', 'node', function(e) {
                let sel = e.target;
                cy.elements().difference(sel.outgoers()).not(sel).addClass('semitransp');
                sel.addClass('highlight').outgoers().addClass('highlight');
            })
            cy.on('mouseout', 'node', function(e) {
                let sel = e.target;
                cy.elements().removeClass('semitransp');
                sel.removeClass('highlight').outgoers().removeClass('highlight');
            })

        }

        graphFunction()
        document.getElementById('closeDetails').addEventListener('click', () => {
            document.getElementById('details').style.display = 'none'
        })

        const getNodeDetails = async (id) => {
            const result = await fetch(`/nodedetails/${id}`)
            const final = await result.json()
            document.getElementById('details').style.display = 'block'
            let finalFilter = final.filter(item => item.id === id)
            document.getElementById('details-header').style.backgroundColor = finalFilter[0].bg
            document.getElementById('header-title').innerHTML = id
            document.getElementById('header-category').innerHTML = finalFilter[0].category

            document.getElementById('details-body').innerHTML = ''
            for (const item of final) {
                if (item.type !== 'title') {
                    document.getElementById('details-body').innerHTML += `
                    <div class="details-list" >
                        <header class="details-toggle">
                            <span class="header-logo">${item.id.charAt(0)}</span>
                            <span class="details-header-text" onclick='getSubDetails(event)'>${item.id}</span>
                        </header>
                        <ul class='sub-details' id='${item.id}'>
                            <li id="details-text">${item.text}</li>
                            <li id="location">${item.location}</li>
                            <a href='${item.link}' target='_blank'>Link'e git</a>
                            <li id="address">${item.address}</li>
                        </ul>
                    </div>
                    `
                }
            }
        }

        const getSubDetails = (e) => {
            console.log(e.target)
            document.querySelectorAll('.sub-details').forEach(item => {
                item.style.display = 'none'
            })
            if (document.getElementById(e.target.innerText)) {
                document.getElementById(e.target.innerText).style.display = 'block'
                document.getElementById('header-title').innerHTML = e.target.innerText
            }
        }
    </script>
</body>

</html>
