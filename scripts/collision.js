export function collis(player, object1) {
    return ((player.position.x+player.size.w >= object1.x &&
            player.position.x <= object1.x+object1.w)&&
            (player.position.y+player.size.h >= object1.y&&
            player.position.y <= object1.y+object1.h))
}