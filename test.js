const drone = require('./index');

drone.control.connect(); // Connect to drone

// Control Commands
drone.control.connect()
drone.control.takeOff()
drone.control.land()
drone.control.emergency()
drone.control.stop()
drone.control.move.up(x)
drone.control.move.down(x)
drone.control.move.left(x)
drone.control.move.right(x)
drone.control.move.front(x)
drone.control.move.back(x)
drone.control.move.go(end, speed)
drone.control.move.curve(start, end, speed)
drone.control.rotate.clockwise(x)
drone.control.rotate.counterClockwise(x)
drone.control.flip.left()
drone.control.flip.right()
drone.control.flip.back()
drone.control.flip.front()

// Set Commands
drone.set.speed(x)
drone.set.rc(x, y, z, yaw)
drone.set.wifi(ssid, password)

// Read Commands
drone.read.speed()
drone.read.battery()
drone.read.time()
drone.read.height()
drone.read.temperature()
drone.read.attitude()
drone.read.barometer()
drone.read.tof()
drone.read.acceleration()
drone.read.wifi()

//STREAM STATE
const stateEmitter = drone.receiver.state.bind()
stateEmitter.on('message', res => console.log)
drone.receiver.state.close()

//STREAM VIDEO
const videoEmitter = drone.receiver.video.bind()
videoEmitter.on('message', res => console.log)
drone.receiver.video.close()                      