const STORAGE_PREFIX = "chemistry-experiment-image:";

function setImage(figure, src) {
  figure.classList.remove("missing-image");

  let img = figure.querySelector("img");
  if (!img) {
    img = document.createElement("img");
    img.alt = `${figure.dataset.title} experiment image`;
    figure.prepend(img);
  }

  img.src = src;
}

function addUploader(figure) {
  const key = `${STORAGE_PREFIX}${figure.dataset.imageKey}`;
  const savedImage = localStorage.getItem(key);

  if (savedImage) {
    setImage(figure, savedImage);
  }

  const label = document.createElement("label");
  label.className = "upload-control";
  label.textContent = savedImage ? "Change image" : "Upload image";

  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";

  input.addEventListener("change", () => {
    const file = input.files && input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      localStorage.setItem(key, reader.result);
      setImage(figure, reader.result);
      label.textContent = "Change image";
    });
    reader.readAsDataURL(file);
  });

  label.append(input);
  figure.append(label);
}

document.querySelectorAll(".photo[data-image-key]").forEach(addUploader);
