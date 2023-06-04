import { player } from "./Player.js";

export function physics() {
    player.position.y += player.velocity.y
    player.velocity.y += 0.5
    if (player.position.y + player.size.h > 550) {
        player.velocity.y = 0
    }
}