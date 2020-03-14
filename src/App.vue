<template>
  <div id="app">
    <header>
      <nav
        class="uk-navbar-container uk-padding-small uk-padding-remove-vertical uk-visible@m"
        uk-sticky="show-on-up: true"
        uk-navbar
      >
        <div class="uk-navbar-left">
          <router-link class="uk-navbar-item uk-logo" to="/">Logo</router-link>
          <ul class="uk-navbar-nav">
            <li class="uk-active">
              <router-link to="/">Active</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
          </ul>
        </div>
        <div class="uk-navbar-right">
          <div>
            <a class="uk-navbar-toggle" uk-search-icon href="#"></a>
            <div
              class="uk-drop"
              uk-drop="mode: click; pos: left-center; offset: 0"
            >
              <form class="uk-search uk-search-navbar uk-width-1-1">
                <input
                  class="uk-search-input"
                  type="search"
                  placeholder="Search..."
                  autofocus
                />
              </form>
            </div>
          </div>
        </div>
      </nav>

      <nav
        class="uk-navbar-container uk-padding-small uk-padding-remove-vertical uk-hidden@m"
        uk-sticky
        uk-navbar
      >
        <div class="uk-navbar-left">
          <a
            class="uk-navbar-toggle"
            uk-navbar-toggle-icon
            href="#"
            uk-toggle="target: #offcanvas-nav"
          ></a>
        </div>
        <router-link class="uk-navbar-item uk-logo uk-position-center" to="/">Logo</router-link>
        <div class="uk-navbar-right">
          <div>
            <a class="uk-navbar-toggle" uk-search-icon href="#"></a>
            <div
              class="uk-navbar-dropdown"
              uk-drop="mode: click; cls-drop: uk-navbar-dropdown; boundary: !nav"
            >
              <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-expand">
                  <form class="uk-search uk-search-navbar uk-width-1-1">
                    <input
                      class="uk-search-input"
                      type="search"
                      placeholder="Search..."
                      autofocus
                    />
                  </form>
                </div>
                <div class="uk-width-auto">
                  <a class="uk-navbar-dropdown-close" href="#" uk-close></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <div id="offcanvas-nav" uk-offcanvas="overlay: true">
      <div class="uk-offcanvas-bar">
        <ul class="uk-nav uk-nav-default">
          <li class="uk-active">
            <router-link to="/">Active</router-link>
          </li>
          <li class="uk-parent">
            <router-link to="/">Parent</router-link>
            <ul class="uk-nav-sub">
              <router-link to="/About">Sub item</router-link>
              <router-link to="/About">Sub item</router-link>
            </ul>
          </li>
          <li class="uk-nav-header">Header</li>
          <li>
            <router-link to="/About">
              <span class="uk-margin-small-right" uk-icon="icon: table"></span>
              Item
            </router-link>
          </li>
          <li>
            <router-link to="/About">
              <span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span>
              Item
            </router-link>
          </li>
          <li class="uk-nav-divider"></li>
          <li>
            <router-link to="/About">
              <span class="uk-margin-small-right" uk-icon="icon: trash"></span>
              Item
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view />
    <div class="uk-padding uk-padding-remove-vertical">
      <a href="#" class="uk-align-right" uk-scroll uk-totop></a>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}

.uk-totop {
  color: #000;
  margin-top: -40px;
  transform: scale(1.5);
}
.uk-navbar-dropdown {
  width: 100%;
  left: 0 !important;
  background: #fff;
}

.uk-navbar {
  .uk-search-navbar {
    .uk-search-input {
      font-size: 1em;
      border-bottom: 1px solid #b5b5b5;
    }
  }
}
</style>
