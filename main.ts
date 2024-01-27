let haloDisplay: kitronik_halo_hd.ZIPHaloHd = null
basic.forever(function () {
    haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
})
