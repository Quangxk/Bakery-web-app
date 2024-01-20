<template>
  <footer>
    <div class="footer-email">
      <p class="item">Sign up to get updates from us</p>
      <input class="item input" type="text" placeholder="Email" />
      <p class="item">more text goes here</p>
    </div>
    <div>
      <div class="footer-link">
        <div class="footer-link-about">
          <ul v-for="item in about" :key="item.title">
            <li class="link">
              <a :href="item.link"> {{ item.title }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-link-contact">
          <ul v-for="item in contact" :key="item.title">
            <li class="link">
              <a :href="item.link"> {{ item.title }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-link-policy">
          <ul v-for="item in policy" :key="item.title">
            <li class="link">
              <a :href="item.link"> {{ item.title }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="sponsor">
        <p>Our Partners</p>
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 488 512"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                fill="#f7f7f8"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 488 512"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                fill="#f7f7f8"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 488 512"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                fill="#f7f7f8"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              />
            </svg>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-icon">
      <ul>
        <li class="item">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                fill="#f7f7f8"
                d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"
              />
            </svg>
          </a>
        </li>
        <li class="item">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                fill="#f7f7f8"
                d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
              />
            </svg>
          </a>
        </li>

        <li class="item">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                fill="#f7f7f8"
                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script lang="ts">
export default {
  setup() {
    const about = [
      {
        title: "ABOUT",
        link: "#",
      },
      {
        title: "NEWS",
        link: "#",
      },
      {
        title: "CAREERS",
        link: " #",
      },
      {
        title: "FAQ",
        link: "#",
      },
    ];
    const contact = [
      {
        title: "CONTACT US",
        link: "#",
      },
      {
        title: "CATERING",
        link: "#",
      },
      {
        title: "CORPORATE GIFTING",
        link: "#",
      },
    ];
    const policy = [
      {
        title: "REFUND POLICY",
        link: "#",
      },
      {
        title: "PRIVACY POLICY",
        link: "#",
      },
      {
        title: "TERMS OF SERVICE",
        link: "#",
      },
      {
        title: "SHIPPING POLICY",
        link: "#",
      },
      {
        title: "SUBCRIPTION POLICY",
        link: "#",
      },
    ];
    return {
      about,
      contact,
      policy,
    };
  },
};
</script>
<style scoped>
footer {
  /* position: absolute; */

  bottom: 0;
  display: flex;
  background-image: url("https://www.viedefrance.co.jp/delifrance/assets/img/top/bg_sand.png");
  width: 100%;
  font-family: "linotype-didot";
  padding-top: 50px;
  padding-bottom: 40px;
}
.footer-email {
  margin-left: 250px;
}
.footer-link {
  display: flex;
}
.footer-icon ul {
  display: flex;
}
.item {
  list-style: none;
  margin-left: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
}
a,
p {
  color: white;
}
a {
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s;
}
a:hover {
  color: red;
}
.link {
  list-style: none;
  margin-top: 10px;
}
.footer-link-contact {
  margin-left: 80px;
}
.footer-link-policy {
  margin-left: 80px;
}
.footer-link-about {
  margin-left: 80px;
}
.sponsor ul {
  display: flex;
}
.sponsor ul li {
  list-style: none;
  margin-left: 30px;
}
</style>
