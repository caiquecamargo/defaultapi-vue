export function serialize(obj) {
  let queryString = "";
  for (let key in obj) {
    queryString += `&${key}=${obj[key]}`;
  }

  return queryString;
}

export function mapFields(options) {
  const object = {};
  for (let x = 0; x < options.fields.length; x++) {
    const field = [options.fields[x]];
    object[field] = {
      get() {
        return this.$store.state[options.base][field];
      },
      set(value) {
        this.$store.commit(options.mutation, { [field]: value });
      }
    };
  }
  return object;
}

export function compareTwoArrays(arrayOne, arrayTwo) {
  if (arrayOne.length != arrayTwo.length) return 0;
  let flag = 1;
  arrayOne.forEach(element => {
    if (arrayTwo.indexOf(element) < 0) flag = 0;
  });

  return flag;
}

export function removeHTMLElements(text) {
  return text.replace(/(<[\w|/]+>)+/g, '');
}

export class Gallery {
  constructor() {
    this.gallery = document.querySelector('[data-gallery="gallery"]');
    this.galleryList = document.querySelectorAll('[data-gallery="list"]');
    this.galleryMain = document.querySelector('[data-gallery="main"]');
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage({ currentTarget }) {
    this.galleryMain.src = currentTarget.src;
  }

  addChangeEvent() {
    this.galleryList.forEach(img => {
      img.addEventListener('click', this.changeImage);
      img.addEventListener('mouseover', this.changeImage);
    })
  }

  init() {
    if (this.gallery) {
      this.addChangeEvent();
    }
  }
}