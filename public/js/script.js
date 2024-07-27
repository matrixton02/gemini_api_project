let text;
let dictionary=new Object();
dictionary["Constant"]="O(1)";
dictionary["Linear"]="O(n)";
dictionary["Logarithmic"]="O(log(n))";
dictionary["Quadratic"]="O(n^2)";
dictionary["Cubic"]="O(n^3)";
console.log(dictionary);
function gettext(){
  var text_area = document.getElementById('code');
  text = text_area.value;
  console.log(text);
}
document.getElementById('submit').onclick = async function() {
  gettext();
  try {
    const response = await fetch('http://localhost:3000/send-text', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
    });

    let result = await response.text();
    result=String(result).trim();
    // alert(result);
    document.getElementById('answer').innerHTML = `Time Complexity:${result} ${dictionary[result]}`;
  } catch (error) {
    console.error('Error sending text:', error);
  }
};