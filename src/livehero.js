export default function liveHero(live){
 if (live.health > 50) {
    return 'healthy'
 };
 if ( 50 >= live.health && live.health >= 15) {
    return 'hewounded'
 };
 if (15> live.health) {
    return 'critical'
 };
return 0;
}