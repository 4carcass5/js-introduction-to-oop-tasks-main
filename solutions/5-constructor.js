export function Point(x, y) {
    this.x = x;
    this.y = y;
    this.getX = function() { return this.x; };
    this.getY = function() { return this.y; };
}

export function Segment(beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
    this.getBeginPoint = function() { return this.beginPoint; };
    this.getEndPoint = function() { return this.endPoint; };
}

export function reverse(segment) {
    const beginPoint = new Point(segment.getEndPoint().getX(), segment.getEndPoint().getY());
    const endPoint = new Point(segment.getBeginPoint().getX(), segment.getBeginPoint().getY())

    return new Segment(beginPoint, endPoint);
}

export default { Segment, Point, reverse };
