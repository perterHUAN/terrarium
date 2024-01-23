function dragElement(element) {
  // 上一次pointer的位置 clientX clientY
  // clientX, clientY是相对于视口的位置,我们最终需要的是相对距离
  if (!element) return;
  let lastX = 0,
    lastY = 0;

  function stopDrag(event) {
    element.removeEventListener("pointermove", runningDrag);
    element.addEventListener("pointerup", stopDrag);
  }
  function runningDrag(event) {
    const disX = event.clientX - lastX,
      disY = event.clientY - lastY;
    lastX = event.clientX;
    lastY = event.clientY;

    element.style.top = element.offsetTop + disY + "px";
    element.style.left = element.offsetLeft + disX + "px";
  }
  function startDrag(event) {
    event.preventDefault();
    lastX = event.clientX;
    lastY = event.clientY;

    element.addEventListener("pointermove", runningDrag);
    element.addEventListener("pointerup", stopDrag);
  }

  element.addEventListener("pointerdown", startDrag);
}

function initial() {
  for (let i = 1; i <= 14; ++i) {
    dragElement(document.querySelector(`#plant${i}`));
  }
}
initial();
