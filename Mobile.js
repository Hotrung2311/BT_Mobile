let Mobile = function (batery, draft, inbox, sent, status) {
    this.batery = batery;
    this.draft = draft;
    this.inbox = inbox;
    this.sent = sent;
    this.status = status;
    this.power = function () {
        if(this.batery > 0)
            this.status = !this.status;
        else {
            this.status = false;
        }
        this.batery --;
    };
    this.charge = function () {
        this.batery = 100;
        console.log("Pin đầy");
    };
    this.setDraft = function (message) {
        if(this.status===true){
            this.draft = message;
        }
        this.batery --;
    };
    this.sentMessage = function (mobile) {
        if (this.status){
            this.sent.push(this.draft);
            mobile.inbox.push(this.draft);
            this.draft = "";
        }
        this.batery --;
    }
};

let Samsung = new Mobile(100, "", [],[], true);
let Iphonex = new Mobile(100, "", [],[], true);