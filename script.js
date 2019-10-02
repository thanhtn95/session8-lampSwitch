let display = document.getElementById("display");

function ElectricLamp(status) {
    this.status = status;
    this.getStatus = function () {
        return this.status;
    }
    this.turnOff = function () {
        this.status = false;
    }
    this.turnOn = function () {
        this.status = true;
    }
}

function SwitchButton(status, lamp) {
    this.status = status;
    this.lamp = lamp;
    this.connectToLamp = function () {
        this.status = this.lamp.getStatus();
        if (this.status) {
            display.innerText = "Lamp Is On";
        } else {
            display.innerText = "Lamp Is Off";
        }
    }
    this.switchOn = function () {
        this.status = true;
        this.lamp.turnOn();
        this.connectToLamp();
    }

    this.switchOff = function () {
        this.status = false;
        this.lamp.turnOff();
        this.connectToLamp();
    }
}

let lamp = new ElectricLamp(false);
let switchbtn = new SwitchButton(true, lamp);