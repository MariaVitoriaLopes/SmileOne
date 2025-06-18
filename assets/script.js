function abrirDropdownDuvida(img) {
  const duvida = img.closest(".duvida");
  const texto = duvida.querySelector(".texto_duvida_aberta");

  duvida.classList.toggle("aberto");
  texto.classList.toggle("aparente");
  img.classList.toggle("virado");
}

function abrirMenuLateral() {
    const menuToggle = document.getElementById("menu");
    const navMenu = document.getElementById("navMenu");
    
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");

      if (navMenu.classList.contains("show")) {
        menuToggle.src = "assets/img/fechar.svg";
        menuToggle.alt = "Fechar menu";
      } 
      
      else {
        menuToggle.src = "assets/img/menu_hamburguer.svg";
        menuToggle.alt = "Abrir menu";
      }
    });
}