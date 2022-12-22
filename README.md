<div id="top"></div>


<!-- PROJECT SHIELDS -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://www.runsidekick.com">
    <img src="https://github.com/boroskoyo/sidekick-elastic/raw/master/Sidekick_Logo.svg" alt="Logo" width="200" height="80">
  </a>
  <h2 align="center">+</h2>
   <a href="https://www.runsidekick.com">
    <img src="https://miro.medium.com/max/1076/0*Oi_NE4lwQWFEw5mj.png" alt="Logo" width="227" height="140">
  </a>

  <h3 align="center">Sidekick Recipes: Send logs to Loki -Add missing logs to your running microservices</h3>

  <p align="center">
    Send your collected tracepoint & logpoint events to your Loki instances.
    <br />
    <a href="https://docs.runsidekick.com/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.runsidekick.com">Sidekick Home</a>
    ·
    <a href="https://www.runsidekick.com/contact-us">Report Bug & Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-recipe">About The Recipe</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Recipe


### Related blog post: https://medium.com/runsidekick/sidekick-recipes-2-add-missing-logs-to-your-running-microservices-and-send-them-to-loki-1f5a3449343c

<br>
Sidekick is a production debugging and on-demand logging tool where you can debug your running applications while they keep on running. Sidekick provides the ability to add logs and put non-breaking breakpoints in your application code which captures the snapshot of the application state, the call stack, variables, etc.

Sidekick Actions:
* A tracepoint is basically a non-breaking remote breakpoint. In short, it takes a snapshot of the variables when the code hits that line.
* Logpoints open the way for dynamic logging to Sidekick users. Replacing traditional logging with dynamic logging has the potential to lower stage sizes, costs, and time for log searching while adding the ability to add new logpoints without editing the source code, redeploying or restarting the application

This recipe aims to help you send your collected tracepoint & logpoint events to your own Loki instances.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Winston](https://www.npmjs.com/package/winston)
* [winston-loki](https://www.npmjs.com/package/winston-loki)
* [sidekick-client](https://www.npmjs.com/package/@runsidekick/sidekick-client)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

tested with node v16.14.2

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/boroskoyo/sidekick-elastic.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

3. Create a `.env` file and edit according to your needs
   ```js
    sidekick_email: ""
    sidekick_password: ""
    loki_url: ""
    loki_auth: ""
   ```

4. Edit the ingestFunc function if yo want to alter your logs. You can also define different functions for tracepoints & logpoints.

   ```js
    function ingestFunc () {
        return async function (data) {
            logger.info(JSON.stringify(data));
        }
    }
   ```


4. Run!
   ```sh
   npm start
   ```
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

You can also run this recipe in a container. For this purpose a Dockerfile is located in the directory.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Barış Kaya - [@boroskoyo](https://twitter.com/boroskoyo)

Sidekick: [website](https://www.runsidekick.com)

<p align="right">(<a href="#top">back to top</a>)</p>
