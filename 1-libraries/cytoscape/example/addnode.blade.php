@extends('layout')
@section('content')
 <div class="container" style="padding:30px;">
    <h3>Düğüm Ekle</h3>
    <div class="">
        <select name="type" id="type" class="node-inputs">
            <option value="title">Title</option>
            <option value="main">Main</option>
        </select>
    </div>
    <div class="">
      <input type="text" id="nodeId" class="node-inputs" placeholder="Düğüm Adı..." maxlength="100" title="Bu alan en fazla 100 karekter olabilir">
    </div>
    <div class="add-node-inputs-con">
      <input type="text" id="nodeSource" class="node-inputs" placeholder="Düğüm Kaynagı..." maxlength="100" title="Bu alan en fazla 100 karekter olabilir">
    </div>
    <div class="add-node-inputs-con">
      <input type="text" id="nodeSource2" class="node-inputs" placeholder="Düğüm Kaynagı 2..." maxlength="100" title="Bu alan en fazla 100 karekter olabilir">
    </div>
    <div class="add-node-inputs-con">
      <input type="text" id="nodeSource3" class="node-inputs" placeholder="Düğüm Kaynagı 3..." maxlength="100" title="Bu alan en fazla 100 karekter olabilir">
    </div>
    <div class="add-node-inputs-con">
      <input type="text" id="nodeCategory" class="node-inputs" placeholder="Düğüm Kategori..." maxlength="100" title="Bu alan en fazla 100 karekter olabilir">
    </div>
    <div id="not-main" style="display: none">
        <div class="add-node-inputs-con">
          <input type="text" id="nodeAddress" class="node-inputs" placeholder="Düğüm Adres..." maxlength="255" title="Bu alan en fazla 255 karekter olabilir">
        </div>
        <div class="add-node-inputs-con">
          <input type="text" id="nodeLocation" class="node-inputs" placeholder="Düğüm Harita..." maxlength="255" title="Bu alan en fazla 255 karekter olabilir">
        </div>
        <div class="add-node-inputs-con">
          <input type="text" id="nodeLink" class="node-inputs" placeholder="Düğüm Link..." maxlength="255" title="Bu alan en fazla 255 karekter olabilir">
        </div>
        <div class="add-node-inputs-con">
          <textarea name="" id="nodeText" class="node-inputs" cols="30" rows="3" placeholder="Düğüm Açıklama" maxlength="1000" title="Bu alan en fazla 1000 karekter olabilir"></textarea>
        </div>
    </div>
    <input type="button" value="Düğüm Ekle" id="addNode" class="nodes-btn" onclick="addNode()">

    <hr>
    <h3>Bağlantı Ekleme</h3>
    <div class="add-node-inputs-con">
      <input type="text" id="edgeId" class="node-inputs" placeholder="Bağlantı Adı..." maxlength="100" title="Bu alan en fazla 100 karekter olabilir">
    </div>
    <div class="add-node-inputs-con">
      <input type="text" id="edgeSource" class="node-inputs" placeholder="Bağlantı Kaynağı..." maxlength="100" title="Bu alan en fazla 100 karekter olabilir">
    </div>
    <div class="add-node-inputs-con">
      <input type="text" id="edgeTarget" class="node-inputs" placeholder="Bağlantı Hedef..." maxlength="100" title="Bu alan en fazla 100 karekter olabilir">
    </div>
    <input type="button" value="Bağlantı Ekle"  class="nodes-btn" onclick="connectEdge()">
    <hr>
    <h3>Düğüm Silme</S></h3>
    <div class="add-node-inputs-con">
        <label for="">Select Source Node</label>
        <select name="removeid" id="remove-id" style="margin:10px; min-width:60px;">
            <option value="" disabled selected>Select</option>
            @foreach($nodes as $item)
                <option value="{{$item->id}}">{{$item->id}}</option>
            @endforeach
        </select>
      <label for="aggre">
          <span class="aggre-text">Alt Bağlantılar Dahil</span>
      </label>
      <input type="checkbox" name="aggre" id="includeChild" class="aggre-btn">
    </div>
    <input type="button" value="Düğüm Sil"  class="nodes-btn" onclick="removeNode()">
  </div>
  <script>
    //add parent
      document.getElementById('type').addEventListener('change', (e) => {
        if(e.target.value === 'main'){
            document.getElementById('not-main').style.display = 'block'
        } else {
          document.getElementById('not-main').style.display = 'none'
        }
      })
      
      const addNode = async () => {
        let id = document.getElementById('nodeId').value
        let type = document.getElementById('type').value
        let source = document.getElementById('nodeSource').value
        let source2 = document.getElementById('nodeSource2').value
        let source3 = document.getElementById('nodeSource3').value
        let category = document.getElementById('nodeCategory').value
        let location = document.getElementById('nodeLocation').value
        let address = document.getElementById('nodeAddress').value
        let link = document.getElementById('nodeLink').value
        let text = document.getElementById('nodeText').value
        if(id === ''
          || type === ''
          || source === ''
          || category === ''
          ) {
          alert('Lütfen alanları doldurunuz!')
        } else {
          const result = await fetch('/addnode', {
            method:'Post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN':'{{csrf_token()}}',
            },
            body:JSON.stringify({
              type:type,
              id:id,
              source:source,
              source2:source2,
              source3:source3,
              category:category,
              location:location,
              address:address,
              link:link,
              text:text
            })
          })
          const final = await result.json()
          alert(final.msg)
        }
      }

    //connect edge
      const connectEdge = async () => {
        let edgeID = document.getElementById('edgeId').value
        let edgeSource = document.getElementById('edgeSource').value
        let edgeTarget = document.getElementById('edgeTarget').value
        if(edgeID == '' || edgeSource === '' || edgeTarget === ''){
          alert('Lütfen alanları doldurunuz!')
        } else {
          const result = await fetch('/connectedge', {
            method:'Post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN':'{{csrf_token()}}',
            },
            body:JSON.stringify({
              edgeId:edgeID,
              edgeSource:edgeSource,
              edgeTarget:edgeTarget
            })
          })
          const final = await result.json()
          edgeId = ''
          edgeSource = ''
          edgeTarget = ''
          alert(final.msg)
        }
      }

    //remove node and edges
      const removeNode = async () => {
        let removeId = document.getElementById('remove-id').value
        let checkAll = document.getElementById('includeChild').checked
        if(removeId){
        const result = await fetch('/admin/removenode',{
          method:'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'X-CSRF-TOKEN':'{{csrf_token()}}'
          },
          body:JSON.stringify({
            id:removeId,
            includeChild: checkAll
          })
        })
          const final = await result.json()
          if(final.msg === '401'){
            alert('Böyle bir düğüm yoktur!')
          } else {
            removeId = ''
            alert(final.msg)
          }
        } else {
          alert('Lütfen bir düğüm seçiniz!')
        }
      }
  </script>
@stop
