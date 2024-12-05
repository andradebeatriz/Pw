document.getElementById("recipe-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Capturar os valores dos campos
    const recipeName = document.getElementById("recipe-name").value;
    const ingredients = document.getElementById("ingredients").value;
    const preparation = document.getElementById("preparation").value;
  
    // Criar um objeto de receita
    const recipe = {
      name: recipeName,
      ingredients: ingredients,
      preparation: preparation
    };
  
    // Salvar no localStorage
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipes.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));
  
    // Atualizar a tabela
    updateTable();
  
    // Limpar o formulário
    document.getElementById("recipe-form").reset();
  });
  
  function updateTable() {
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const tableBody = document.getElementById("recipes-table-body");
  
    // Limpar a tabela
    tableBody.innerHTML = "";
  
    // Adicionar cada receita na tabela
    recipes.forEach((recipe) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${recipe.name}</td>
        <td>${recipe.ingredients}</td>
        <td>${recipe.preparation}</td>
      `;
  
      tableBody.appendChild(row);
    });
  }
  
  // Carregar os dados ao iniciar
  updateTable();