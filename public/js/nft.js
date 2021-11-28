const createBtn = async (event) => {
  event.preventDefault();

  const nft_name = document.querySelector("#nameNFT").value.trim();
  const image_url = document.querySelector("#imageUrl").value.trim();
  const description = document.querySelector("#descriptionNFT").value.trim();

  if (nft_name && image_url && description) {
    const response = await fetch('/api/nfts', {
      method: 'POST',
      body: JSON.stringify({ nft_name, image_url, description }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(response);
    if (response.ok) {
      document.location.replace("/nftpage");
    } else {
      alert("Failed to create NFT");
    }
  }
};

document.querySelector(".create-form").addEventListener("submit", createBtn);
