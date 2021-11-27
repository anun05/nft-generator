const createBtn = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#nameNFT").value.trim();
  const url = document.querySelector("#imageUrl").value.trim();
  const description = document.querySelector("#descriptionNFT").value.trim();

  if (name && url && description) {
    const response = await fetch(`/api/nftpage`, {
      method: "POST",
      body: JSON.stringify({ name, url, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to create project");
    }
  }
};

document.querySelector(".create-form").addEventListener("submit", createBtn);
