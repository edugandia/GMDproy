const ScrollToId = id => {
  console.log(id);
  const elementToScroll = document.getElementById(id);
  elementToScroll.scrollIntoView({ behavior: "smooth" });
};

export default ScrollToId;
