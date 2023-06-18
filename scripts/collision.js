export function collisGround(player, ground) {
    return ((player.position.x+player.size.w >= ground.x &&
            player.position.x <= ground.x+ground.w)&&
            (player.position.y+player.size.h >= ground.y&&
            player.position.y <= ground.y+ground.h))
}

export function collis(player, object) {
    return ((player.position.x+player.size.w >= object.position.x &&
            player.position.x <= object.position.x+object.size.w)&&
            (player.position.y+player.size.h >= object.position.y&&
            player.position.y <= object.position.y+object.size.h))
}