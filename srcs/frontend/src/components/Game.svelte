<script lang="ts">
    import type { Game } from "../types/game";
    export let game: Game;

    console.log(game)
</script>

<style lang="scss">
    game {
        display: grid;
        position: relative;
        background: var(--bg);
        height: 100%;
        grid-template-columns: repeat(var(--width), 1fr);
        grid-template-rows: repeat(var(--height), 1fr);
        border: 2px solid black;
        aspect-ratio: var(--aspect-ratio);

        .cell:nth-child(odd) {
            background: #fafafa;
        }
    }
</style>

<game
    style="
        --bg: {game.info.properties.background};
        --height: {game.info.properties.height};
        --width: {game.info.properties.width};
        --aspect-ratio: calc({game.info.properties.width} / {game.info.properties.height});
    "
>
    {#each Array(game.info.properties.height) as _, rowIndex}
        {#each Array(game.info.properties.width) as _, colIndex}
            <div
                style="
                    grid-column: {colIndex + 1};
                    grid-row: {rowIndex + 1};
                    aspect-ratio: 1 / 1;
                "
                class="cell"
            ></div>
        {/each}
    {/each}
</game>


