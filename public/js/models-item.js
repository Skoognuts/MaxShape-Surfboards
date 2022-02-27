const boardShow = document.getElementById('boardShow');
const thumbnails = document.getElementsByClassName('thumbnail');
const thumbnailIds = [];

for (let i = 0; i < thumbnails.length; i++) {
  thumbnailIds[i] = document.getElementById(thumbnails[i].id);
  thumbnailIds[i].addEventListener('click', () => {
    boardShow.src = thumbnailIds[i].id;
  })
}