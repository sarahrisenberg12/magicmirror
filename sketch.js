let capture
let tracker
let darth 


function preload() {
    darth = loadImage('darth.png')
    email1 = loadImage('email1.png')
    chrome = loadImage('chrome.png')
    firefox = loadImage('firefox.png')
    safari = loadImage('safari.png')
    at = loadImage('at.png')
    wifi = loadImage('wifi.png')
    www = loadImage('www.png')
    windows = loadImage('windows.png')
    wifi2 = loadImage('wifi2.png')
    internetexplorer = loadImage('internetexplorer.png')
    touch = loadImage('touch.png')
    power = loadImage('power.png')
    download = loadImage('download.png')
    usb = loadImage('usb.png')
    info = loadImage('info.png')
    comp = loadImage('comp.png')
    phone = loadImage('phone.png')
    hand = loadImage('hand.png')
    loops = loadImage('loops.png')
    thumb = loadImage('thumb.png')
    typing = loadImage('typing.png')
    read = loadImage('read.png')
    bulb = loadImage('bulb.png')
    atom = loadImage('atom.png')
    bird = loadImage('bird.png')
    ghost = loadImage('ghost.png')
    like = loadImage('like.png')
    fblike = loadImage('fblike.png')
}


function setup() {

    createCanvas(800, 600)
    capture = createCapture(VIDEO)
    capture.size(800, 600)
    capture.hide()

    tracker = new clm.tracker()
    tracker.init()
    tracker.start(capture.elt)    

}


function draw() {    

    background(0)
    image(capture, 0, 0, capture.width, capture.height)



    let positions = tracker.getCurrentPosition()


    stroke(255, 0 ,0)
    strokeWeight(5)
    fill(255)

    let i = 0
    while (i < positions.length - 1) {

        // ellipse(positions[i][0], positions[i][1], 4, 4)
        // text(i, positions[i][0], positions[i][1])

// line(positions[i][0], positions[i][1], positions[i+1][0], positions[i+1][1])

        i += 1
    }

    if (positions.length > 0) {

        push()
        fill(255, 0, 0)
        image(darth, positions[63][0], positions[63][1], darth.width/5, darth.height/5)

        image(windows, positions[22][0], positions[22][1], windows.width/30, windows.height/30)
        image(safari, positions[21][0], positions[21][1], safari.width/9, safari.height/9)
        image(firefox, positions[20][0], positions[20][1], firefox.width/20, firefox.height/20)
        image(internetexplorer, positions[19][0], positions[19][1], internetexplorer.width/20, internetexplorer.height/20)

        image(at, positions[0][0], positions[0][1], at.width/20, at.height/20)
        image(www, positions[1][0], positions[1][1], www.width/20, www.height/20)
        image(wifi2, positions[2][0], positions[2][1], wifi2.width/10, wifi2.height/10)
        image(touch, positions[3][0], positions[3][1], touch.width/20, touch.height/20)  
        image(power, positions[4][0], positions[4][1], power.width/20, power.height/20)            
        image(download, positions[5][0], positions[5][1], download.width/40, download.height/40)
        image(usb, positions[6][0], positions[6][1], usb.width/30, usb.height/30)   
        image(info, positions[7][0], positions[7][1], info.width/10, info.height/10) 
        image(comp, positions[8][0], positions[8][1], comp.width/15, comp.height/15) 
        image(hand, positions[9][0], positions[9][1], hand.width/10, hand.height/10)
        image(loops, positions[10][0], positions[10][1], loops.width/25, loops.height/25)
        image(thumb, positions[11][0], positions[11][1], thumb.width/10, thumb.height/10)
        image(phone, positions[12][0], positions[12][1], phone.width/20, phone.height/20)
        image(bulb, positions[13][0], positions[13][1], bulb.width/15, bulb.height/15)
        image(atom, positions[14][0], positions[14][1], atom.width/15, atom.height/15)
        image(like, positions[15][0], positions[15][1], like.width/20, like.height/20)
        image(fblike, positions[16][0], positions[16][1], fblike.width/20, fblike.height/20)
        image(ghost, positions[17][0], positions[17][1], ghost.width/10, ghost.height/10)
        image(bird, positions[18][0], positions[18][1], bird.width/15, bird.height/15)
        
        
        
        
        
        
        




        image(read, positions[23][0], positions[23][1], read.width/4, read.height/4)
        image(read, positions[30][0], positions[30][1], read.width/4, read.height/4)

        image(typing, positions[35][0], positions[35][1], typing.width/2, typing.height/2)

        pop()
    // line(0,0, positions[62][0], positions[62][1])
    // line(0, height, positions[62] [0], positions[62][1])
    // line(width, height, positions[62][0], positions[62][1])
    // line(width, 0, positions[62][0], positions[62][1])

    // stroke(0, 0, 255)
    // line(0,0, positions[41][0], positions[41][1])
    // line(0, height, positions[41] [0], positions[41][1])
    // line(width, height, positions[41][0], positions[41][1])
    // line(width, 0, positions[41][0], positions[41][1])

    // stroke(0, 255, 0)
    // line(0,0, positions[37][0], positions[37][1])
    // line(0, height, positions[37] [0], positions[37][1])
    // line(width, height, positions[37][0], positions[37][1])
    // line(width, 0, positions[37][0], positions[37][1])

    // stroke(255, 255, 0)
    // line(0,0, positions[33][0], positions[33][1])
    // line(0, height, positions[33] [0], positions[33][1])
    // line(width, height, positions[33][0], positions[33][1])
    // line(width, 0, positions[33][0], positions[33][1])


    // stroke(255, 170, 2)
    // line(0,0, positions[47][0], positions[47][1])
    // line(0, height, positions[47] [0], positions[47][1])
    // line(width, height, positions[47][0], positions[47][1])
    // line(width, 0, positions[47][0], positions[47][1])

    // stroke(143, 2, 254)
    // line(0,0, positions[57][0], positions[57][1])
    // line(0, height, positions[57] [0], positions[57][1])
    // line(width, height, positions[57][0], positions[57][1])
    // line(width, 0, positions[57][0], positions[57][1])

    // stroke(255)
    // line(0,0, positions[53][0], positions[53][1])
    // line(0, height, positions[53] [0], positions[53][1])
    // line(width, height, positions[53][0], positions[53][1])
    // line(width, 0, positions[53][0], positions[53][1])

    // stroke(254, 2, 208)
    // line(0,0, positions[7][0], positions[7][1])
    // line(0, height, positions[7] [0], positions[7][1])
    // line(width, height, positions[7][0], positions[7][1])
    // line(width, 0, positions[7][0], positions[7][1])

    let face_left_x = positions[1][0]
    let face_left_y = positions[1][1]

    let face_right_x = positions[13][0]
    let face_right_y = positions[13][1]

    // let ratio = darth.height / darth.width
    // let w = (face_width * 2)
    // let h = (w * ratio)

// push()

// fill(0, 255, 0)
// ellipse(face_left_x, face_left_y, 10, 10)
// ellipse(face_right_x, face_right_y, 10, 10)
// line(face_left_x, face_left_y, face_right_x, face_right_y)
// pop()

let face_width = dist(face_left_x, face_left_y, face_right_x, face_right_y)
// print(face_width)

    // let scale = .75
    // image(darth, noseX - darth.width/2, noseY - darth.height/2, darth.width/2, darth.height/2)

    }


}



