let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
    product.onclick = () =>{
previewContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview =>{
          let target = preview.getAttribute('data-target');
          if(name == target){
            preview.classlist.add('active'); 
          }
        });
    };
});
previewBox.forEach(close =>{
  close.querySelectorAll('#fa-times').onclick = () =>{
close.classList.remove('ative');
previewContainer.style.display = 'none';
  };
});