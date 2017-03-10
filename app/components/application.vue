<template lang="html">
  <div class="">
    <div class="app">
      <div class="section">
        <div class="section__container">
          <div class="top-nav">
            <div class="container">
              <h1 class="navbar">
                <ul class="navlist">Marvel</ul>
              </h1>
            </div>
          </div>
          <div class="content">
            <div class="content__sidebar">
              <div class="content__sidebar--character">
                <img src="http://placecage.com/500/500" alt="" class="content__sidebar--photo">
                <h2 class="content__sidebar--title">Spider-Girl (2010 - 2011)</h2>
                <p class="content__sidebar--years">2010 - 2011</p>
              </div>
              <div class="content__sidebar--creators">
                <h2 class="title">Creators</h2>
                <ul class="content__sidebar--creators__list">
                  <li class="content__sidebar--creators__list--item">Creator Placeholder</li>
                  <li class="content__sidebar--creators__list--item">Creator Placeholder</li>
                  <li class="content__sidebar--creators__list--item">Creator Placeholder</li>
                  <li class="content__sidebar--creators__list--item">Creator Placeholder</li>
                  <li class="content__sidebar--creators__list--item">Creator Placeholder</li>
                  <li class="content__sidebar--creators__list--item">Creator Placeholder</li>
                </ul>
              </div>
            </div>
            <div class="content__main">
              <div class="content__main--characters">
                <h1 class="title">Characters</h1>
                <ul class="content__main--grid">
                  <li class="content__main--grid__item">
                    <img src="http://fillmurray.com/200/200" alt="" class="content__main--grid__item--image">
                    <p class="content__main--grid__item--text">Placeholder Character</p>
                  </li>
                  <li class="content__main--grid__item">
                    <img src="http://fillmurray.com/200/200" alt="" class="content__main--grid__item--image">
                    <p class="content__main--grid__item--text">Placeholder Character</p>
                  </li>
                  <li class="content__main--grid__item">
                    <img src="http://fillmurray.com/200/200" alt="" class="content__main--grid__item--image">
                    <p class="content__main--grid__item--text">Placeholder Character</p>
                  </li>
                  <li class="content__main--grid__item">
                    <img src="http://fillmurray.com/200/200" alt="" class="content__main--grid__item--image">
                    <p class="content__main--grid__item--text">Placeholder Character</p>
                  </li>
                </ul>
              </div>
              <div class="content__main--comics">
                <h1 class="title">Comics</h1>
                <ul class="content__main--grid">
                  <li class="content__main--grid__item">
                    <img src="http://lorempixel.com/200/200" alt="">
                    <div class="content__main--grid__item--text">
                      <p class="content__main--grid__item--number">#1</p>
                      <p class="content__main--grid__item--name">Placeholder Comic (2010) #1</p>
                      <div class="content__main--grid__item--button">
                        <p class="content__main--grid__item--button__actual">Read More</p>
                      </div>
                    </div>
                  </li>
                  <li class="content__main--grid__item">
                    <img src="http://lorempixel.com/200/200" alt="">
                    <div class="content__main--grid__item--text">
                      <p class="content__main--grid__item--number">#2</p>
                      <p class="content__main--grid__item--name">Placeholder Comic (2010) #2</p>
                      <div class="content__main--grid__item--button">
                        <p class="content__main--grid__item--button__actual">Read More</p>
                      </div>
                    </div>
                  </li>
                  <li class="content__main--grid__item">
                    <img src="http://lorempixel.com/200/200" alt="">
                    <div class="content__main--grid__item--text">
                      <p class="content__main--grid__item--number">#3</p>
                      <p class="content__main--grid__item--name">Placeholder Comic (2010) #3</p>
                      <div class="content__main--grid__item--button">
                        <p class="content__main--grid__item--button__actual">Read More</p>
                      </div>
                    </div>
                  </li>
                  <li class="content__main--grid__item">
                    <img src="http://lorempixel.com/200/200" alt="">
                    <div class="content__main--grid__item--text">
                      <p class="content__main--grid__item--number">#4</p>
                      <p class="content__main--grid__item--name">Placeholder Comic (2010) #4</p>
                      <div class="content__main--grid__item--button">
                        <p class="content__main--grid__item--button__actual">Read More</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="pop-up">
        <div class="pop-up__button">
          <button class="pop-up__button--actual">X</button>
        </div>
        <p class="pop-up__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {
    model() {
      this.showModel = true;
    },

    close() {
      this.showModel = false;
    }
  },
};
</script>
