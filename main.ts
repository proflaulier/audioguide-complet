let Tag_RFID = 0
MFRC522.Init()
makerbit.setMp3Volume(30)
basic.forever(function () {
    Tag_RFID = MFRC522.getID()
    if (Tag_RFID == 584186783573) {
        makerbit.playMp3TrackFromFolder(1, 1, Mp3Repeat.No)
    }
    if (Tag_RFID == 584193521311) {
        makerbit.playMp3TrackFromFolder(2, 1, Mp3Repeat.No)
    }
    if (Tag_RFID == 584198254737) {
        makerbit.playMp3TrackFromFolder(3, 1, Mp3Repeat.No)
    }
    if (Tag_RFID == 584192013751) {
        makerbit.playMp3TrackFromFolder(4, 1, Mp3Repeat.No)
    }
})
