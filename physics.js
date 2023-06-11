import { player } from "./Player.js";
import { room } from "./ganeration.js";

export function physics() {
    player.position.y += player.velocity.y
    player.velocity.y += 0.5
    if (collision(player,room.ground)) {
        if (player.velocity.y > 0) {
            player.velocity.y = 0
        }
    }
}

export function collision(player, object2) {
    return (player.position.x+player.size.w >= object2.x &&
            player.position.x <= object2.x+object2.w&&
            player.position.y+player.size.h >= object2.y&&
            player.position.y <= object2.y+object2.h)
}