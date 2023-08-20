@extends('layout')
@section('content')
  <div class="container" style="padding:30px;">
    <h2 style="margin-bottom:10px;">Creative Hubs Biçimlendirme</h2>
    <!-- node style -->
    <form action="{{ url('/addstyle') }}" method="POST">
    @csrf
    <div class="add-node-inputs-con">
        <label for="">Select Node</label>
        <select name="basenode" id="base-node" style="margin:10px; min-width:60px;">
            <option value="" disabled selected>Select</option>
            @foreach($nodes as $item)
                <option value="{{$item->id}}">{{$item->id}}</option>
            @endforeach
        </select>
        <label for="">Select Source Node</label>
        <select name="source" id="source-node" style="margin:10px; min-width:60px;">
            <option value="" disabled selected>Select</option>
            @foreach($source as $item)
                <option value="{{$item->source}}">{{$item->source}}</option>
            @endforeach
        </select>
      <label for="aggre">
          <span class="aggre-text">Alt Bağlantılar Dahil</span>
      </label>
      <input type="checkbox" name="includeChild" id="includeChild" class="aggre-btn">
    </div>
    <div class="add-node-inputs-con">
      <header>Düğüm Türü</header>
      <select name="sh" id="sh" class="node-inputs" required>
        <option value="ellipse" selected>Ellipse</option>
        <option value="triangle">Triangle</option>
        <option value="round-triangle">Round Triangle</option>
        <option value="rectangle">Rectangle</option>
        <option value="round-rectangle">Round Rectangle</option>
        <option value="bottom-round-rectangle">Bottom Round Rectangle</option>
        <option value="cut-rectangle">Cut Rectangle</option>
        <option value="barrel">Barrel</option>
        <option value="rhomboid">Rhomboid</option>
        <option value="diamond">Diamond</option>
        <option value="round-diamond">Round Diamond</option>
        <option value="pentagon">Pentagon</option>
        <option value="round-pentagon">Round Pentagon</option>
        <option value="hexagon">Hexagon</option>
        <option value="round-hexagon">Round-Hexagon</option>
        <option value="concave-hexagon">Concave-Hexagon</option>
        <option value="heptagon">Heptagon</option>
        <option value="round-heptagon">Round Heptagon</option>
        <option value="octagon">Octagon</option>
        <option value="round-octagon">Round Octagon</option>
        <option value="star">Star</option>
        <option value="tag">Tag</option>
        <option value="round-tag">Round Tag</option>
        <option value="vee">Vee</option>
      </select>
    </div>
    <div class="add-node-inputs-con">
      <header>Arkaplan Rengi</header>
      <input type="color" id="bg" name="bg" class="node-inputs" title="Node Background Color" required>
    </div>
    <div class="add-node-inputs-con">
      <header>Kenar Rengi</header>
      <input type="color" id="bc" name="bc" class="node-inputs" title="Node Border Color" required>
    </div>
    <div class="add-node-inputs-con">
      <header>Kenar Genişilik</header>
      <input type="number" id="bw" name="bw" class="node-inputs" title="Node Border Width" required>
    </div>
    <div class="add-node-inputs-con">
      <header>Bağlantı(Ok) Türü</header>
      <select name="arrowLine" id="lines" class="node-inputs">
        <option value="straight">Straight</option>
        <option value="straight-triangle">Straight Triangle</option>
        <option value="bezier">Bezier</option>
        <option value="unbundled-bezier">Unbundled Bezier</option>
        <option value="haystack">Haystack</option>
        <option value="segments">Segments</option>
        <option value="taxi">Taxi</option>
      </select>
    </div>
     <input type="submit" value="Stil Ekle" class="nodes-btn" id="addStyle">
      </form>
  </div>

  <script>
    document.getElementById('base-node').addEventListener('change', (e) => {
      const getStyle = async () => {
        const result = await fetch('/getstyle',{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN':'{{csrf_token()}}',
            },
            method:'POST',
            body:JSON.stringify({source: e.target.value})
        })
        let {nodes}  = await result.json()
        console.log(nodes)
        document.getElementById('bg').value = nodes[0].bg
        document.getElementById('bc').value = nodes[0].bc
        document.getElementById('bw').value = nodes[0].bw
      }
      getStyle()
    })

    let bg = ''
    let bc = ''
    let bw = ''
    let sh = ''
  </script>
@stop
