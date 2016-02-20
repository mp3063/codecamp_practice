function boo(bool) {
    if (bool === true || bool === false) {
        switch (bool) {
            case true:
                return true;
            case false:
                return true;
        }
    }
    return false;
}

console.log(boo("false"));

