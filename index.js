function hasPathWithGivenSum(t, s) {

let sum = 0;
function inorder(node) 
{ 
    if(node !== null) 
    { 
        sum = sum + node.value;  
        inorder(node.left); 
        // console.log(node.data); 
        inorder(node.right); 
    } 
    return sum;
} 

let a = inorder(t);
return (a == s ? true : false)
}

const t = {
    "value": 4,
    "left": {
        "value": 1,
        "left": {
            "value": -2,
            "left": null,
            "right": {
                "value": 3,
                "left": null,
                "right": null
            }
        },
        "right": null
    },
    "right": {
        "value": 3,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": {
                "value": -2,
                "left": null,
                "right": null
            },
            "right": {
                "value": -3,
                "left": null,
                "right": null
            }
        }
    }
}

const s = 7;

console.log(hasPathWithGivenSum(t, s))