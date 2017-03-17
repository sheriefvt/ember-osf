export default function(addon) {
    console.log(addon);
    return addon.name.split('/')[0];
}