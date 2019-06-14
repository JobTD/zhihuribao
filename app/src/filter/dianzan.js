export default function(sum) {
    if (sum >= 1000) {
        return (sum / 1000).toFixed(1) + 'k'
    } else {
        return sum
    }
}