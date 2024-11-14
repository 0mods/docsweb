document.addEventListener('mousemove', function(event) {
  const block = document.getElementById('rotateBlock');
  const rect = block.getBoundingClientRect();
  const blockX = rect.left + rect.width / 2;
  const blockY = rect.top + rect.height / 2;
  const deltaX = event.clientX - blockX;
  const deltaY = event.clientY - blockY;
  
  // Рассчитываем углы вращения
  const angleX = deltaY / rect.height * -30; // Вращение по оси X
  const angleY = deltaX / rect.width * 30; // Вращение по оси Y
  
  block.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});