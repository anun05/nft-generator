const nft_name = document.querySelector("#nameNFT");
const image_url = document.querySelector("#imageUrl");
const description = document.querySelector("#descriptionNFT");
const modalTitle = document.querySelector("#exampleModalLabel");
const modalImage = document.querySelector("#modalImage");

const createBtn = async (event) => {
  event.preventDefault();

  const nft_name = document.querySelector("#nameNFT").value.trim();
  const image_url = document.querySelector("#imageUrl").value.trim();
  const description = document.querySelector("#descriptionNFT").value.trim();

  if (nft_name && image_url && description) {
    const response = await fetch("/api/nfts", {
      method: "POST",
      body: JSON.stringify({ nft_name, image_url, description }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      modalTitle.innerHTML = `Minted ${nft_name} NFT!`;
      modalImage.setAttribute("src", image_url);
    } else {
      alert("Failed to create NFT");
    }
  }
};

const refresh = () => {
  document.location.replace("/nftpage");
};

document.querySelector(".create-form").addEventListener("submit", createBtn);
document.querySelector("#create").addEventListener("click", refresh);
