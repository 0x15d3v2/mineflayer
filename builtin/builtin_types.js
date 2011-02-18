
mf.serializableTypeNames = [];

mf.serializableTypeNames.push("Point");
mf.Point = function(x, y, z) {
    this._type = "Point";
    this.x = x;
    this.y = y;
    this.z = z;
};
mf.Point.prototype.floored = function() {
    return new mf.Point(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z));
};
/** returns a new point offset by the amount specified */
mf.Point.prototype.offset = function(dx, dy, dz) {
    return new mf.Point(this.x + dx, this.y + dy, this.z + dz);
};
/** returns a new point */
mf.Point.prototype.plus = function(other) {
    return this.offset(other.x, other.y, other.z);
};
/** euclidean distance */
mf.Point.prototype.distanceTo = function(other) {
    var dx = other.x - this.x;
    var dy = other.y - this.y;
    var dz = other.z - this.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
};
mf.Point.prototype.equals = function(other) {
    return this.x === other.x && this.y === other.y && this.z === other.z;
};
mf.Point.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ", " + this.z + ")";
};

mf.Entity = function() {
};
mf.EntityType = {
    "Player": 1,
    "Mob": 3,
    "Pickup": 4,
};

mf.serializableTypeNames.push("Item");
mf.Item = function(type, count) {
    this._type = "Item";
    this.type = type;
    if (count !== undefined) {
        this.count = count;
    } else {
        this.count = 1;
    }
};

mf.Face = {
    "NoDirection": -1,
    "NegativeY": 0,
    "PositiveY": 1,
    "NegativeZ": 2,
    "PositiveZ": 3,
    "NegativeX": 4,
    "PositiveX": 5,
};

mf.MobType = {
    "Creeper": 50,
    "Skeleton": 51,
    "Spider": 52,
    "GiantZombie": 53,
    "Zombie": 54,
    "Slime": 55,
    "Ghast": 56,
    "ZombiePigman": 57,
    "Pig": 90,
    "Sheep": 91,
    "Cow": 92,
    "Chicken": 93,
};

mf.StoppedDiggingReason = {
    "BlockBroken": 0,
    "Aborted": 1,
};

mf.Control = {
    "NoControl":    0,
    "Forward":      1,
    "Back":         2,
    "Left":         3,
    "Right":        4,
    "Jump":         5,
    "Crouch":       6,
    "DiscardItem":  7,
    "Action1":      8,
    "Action2":      9,
};
