<script lang="ts">
	import { online } from "svelte/reactivity/window";
	import TetrisGame from "../components/Game.svelte";
	import type { Game } from "../types/game";
  let room = "default-room";

  let game: Game = {
    room: "Room 1",
    players: [
      {
        name: "Player 1",
        status: "PLAYING",
        role: "HOST"
      },
      {
        name: "Player 2",
        status: "PLAYING",
        role: "PLAYER"
      }
    ],
    info: {
      status: "RUNNING",
      scores: [
        {
          name: "Player 1",
          score: 1
        },
        {
          name: "Player 2",
          score: 2
        }
      ],
      properties: {
        background: "rgb(255, 255, 255)",
        height: 20,
        width: 10
      }
    }
  } 
</script>

<style lang="scss">
  main {
    display: flex;
    justify-content: center;
    padding: 1rem;
    height: 100dvh;
    .wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      width: 100%;
    }
  }
</style>

<main>
  <div class="wrapper">
    <div>Left sidebar</div>
    <div class="flex gap-2 w-full justify-center">
      <TetrisGame {game} />
    </div>
    <div class="flex gap-2 w-full justify-center">
      <TetrisGame {game} />
    </div>
  </div>
</main>


