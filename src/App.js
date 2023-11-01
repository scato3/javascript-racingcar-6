import GameMain from "./modules/GameMain.js";

class App {
  async play() {
    this.gameMain = new GameMain();
    await this.gameMain.userCarName();
  }
}

const app = new App();
app.play();

export default App;
