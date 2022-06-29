// printing array using setTimeout 
var printit = function (addit, multi) {
    var i = 0;
    var intr = setInterval(function () {
        addit(multi[i]);
        if (++i === (multi.length)) clearInterval(intr);
    }, 100)
}

// selection sort 
function selection(bars, addit) {
    if (bars.length === 0) {
        return;
    }
    var i, j, min_idx, n = bars.length, b, f;
    var temp1 = [];
    var multi = [];
    for (i = 0; i < n - 1; i++) {
        for (b = 0; b < n; b++) {
            if (bars[b] >= 1000)
                bars[b] = bars[b] / 1000;
        }
        min_idx = i;
        for (j = i + 1; j < n; j++) {
            if (bars[j] < bars[min_idx]) {
                min_idx = j;
            }
        }
        for (var c = 0; c < n; c++) {
            if (i !== min_idx) {
                if (c === i) {
                    temp1.push(-1 * bars[i]);
                }
                else if (c === min_idx) {
                    temp1.push(-1 * bars[min_idx]);
                }
                else {
                    temp1.push(bars[c]);
                }
            }
            else {
                if (c === n - 1) {
                    temp1.push(-1 * bars[n - 1]);
                }
                else if (c === i) {
                    temp1.push(-1 * bars[i]);
                }
                else {
                    temp1.push(bars[c]);
                }
            }
        }
        multi.push(temp1);
        temp1 = [];
        if (i !== min_idx) {
            var temp = bars[min_idx] * 1000;
            bars[min_idx] = bars[i] * 1000;
            bars[i] = temp;
        }
        for (var k = 0; k < n; k++) {
            var d = bars[k];
            temp1.push(d);
        }
        multi.push(temp1);
        temp1 = [];
    }
    f = multi.length;
    for (b = 0; b < n; b++) {
        if (bars[b] >= 1000)
            multi[f - 1][b] = bars[b] / 1000;
        else
            multi[f - 1][b] = bars[b];
    }
    printit(addit, multi);
}

// bubble sort 
function bubble(bars,addit){
    if (bars.length === 0) {
        return;
    }
     var i,j,n=bars.length;
     var multi=[],temp1=[];
    for (i = 0; i < n-1; i++)    {
        for (j = 0; j < n-i-1; j++) 
        {
            if (bars[j] <= bars[j+1]) {
               for(var z=0;z<n;z++){
                   if(z===j){
                       temp1.push(-1*bars[z]);
                   }
                   else if(z===j+1){
                   temp1.push(-1*bars[z]);
                }
                else{
                    temp1.push(bars[z]);
                }              
               }
               multi.push(temp1);
               temp1=[];
               for(z=0;z<n;z++){
                temp1.push(bars[z]);
            }
            multi.push(temp1);
            temp1=[];
          }
          else if(bars[j]>bars[j+1]){
            for(z=0;z<n;z++){
                if(z===j){
                    temp1.push(-1*bars[z]);
                }
                else if(z===j+1){
                temp1.push(-1*bars[z]);
             }
             else{
                 temp1.push(bars[z]);
             }              
            }
            multi.push(temp1);
            temp1=[];
            [bars[j],bars[j+1]]=[bars[j+1],bars[j]];
            for(z=0;z<n;z++){
                if(z===j){
                    temp1.push(bars[z]*1000);
                }
                else if(z===j+1){
                    temp1.push(bars[z]*1000);
                }
                else{
                    temp1.push(bars[z]);
                }
            }
            multi.push(temp1);
            temp1=[];
          }
            }
        }
        printit(addit,multi);
    } 

// insertion sort     
function insertion(bars,addit){
    if (bars.length === 0) {
        return;
    }
    var multi=[];
    var i,j,n=bars.length,k;
    var temp1=[];
    for(i=1;i<n;i++){
          var key=bars[i];
          var x=i;
          for(j=i-1;j>=0 && x>0;j--){
                for(k=0;k<n;k++){
                    if(k===j || k===x){
                        temp1[k]=bars[k]*-1;
                    }
                    else{
                        temp1[k]=bars[k];
                    }
                }
                multi.push(temp1);
                temp1=[];
                if(bars[j]>key){
                    var temp=bars[j];
                    bars[j]=bars[x];
                    bars[x]=temp;
                    for(k=0;k<n;k++){
                        if(k===j || k===x){
                            temp1[k]=bars[k]*1000;
                        }
                        else{
                            temp1[k]=bars[k];
                        }
                    }
                    multi.push(temp1);
                    temp1=[];
                    x--;
                }
                else{
                    for(k=0;k<n;k++){
                            temp1[k]=bars[k];
                    }
                    multi.push(temp1);
                    temp1=[];
                }
          }
    }
    printit(addit,multi);
}

// merge sort 
function merge(arr, l, m, r, finalarr) {
    var n1 = m - l + 1;
    var n2 = r - m;
    var L = new Array(n1);
    var R = new Array(n2);
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
    var i = 0;
    var j = 0;
    var k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            var x = [];
            for (var f = 0; f < arr.length; f++) {
                if (f == m + 1 + j || f == l + i) {
                    x.push(arr[f] * -1);
                }
                else {
                    x.push(arr[f]);
                }
            }
            finalarr.push(x);
            arr[k] = L[i];
            var x = [];
            for (var f = 0; f < arr.length; f++) {
                if (f == k || f == l + i) {
                    x.push(arr[f] * -1);
                }
                else {
                    x.push(arr[f]);
                }
            }
            finalarr.push(x);
            i++;
        }
        else {
            var x = [];
            for (var f = 0; f < arr.length; f++) {
                if (f === m + 1 + j || f === l + i) {
                    x.push(arr[f] * -1);
                }
                else {
                    x.push(arr[f]);
                }
            }
            finalarr.push(x);
            arr[k] = R[j];
            var x = [];
            for (var f = 0; f < arr.length; f++) {
                if (f === m + 1 + j || f === k) {
                    x.push(arr[f] * -1);
                }
                else {
                    x.push(arr[f]);
                }
            }
            finalarr.push(x);

            j++;
        }
        k++;
    }
    while (i < n1) {
        var x = [];
        for (var f = 0; f < arr.length; f++) {
            if (f == k || f == l + i) {
                x.push(arr[f] * -1);
            }
            else {
                x.push(arr[f]);
            }
        }
        finalarr.push(x);
        arr[k] = L[i];
        var x = [];
        for (var f = 0; f < arr.length; f++) {
            if (f == k || f == l + i) {
                x.push(arr[f] * -1);
            }
            else {
                x.push(arr[f]);
            }
        }
        finalarr.push(x);
        i++;
        k++;
    }
    while (j < n2) {
        var x = [];
        for (var f = 0; f < arr.length; f++) {
            if (f === m + 1 + j || f === k) {
                x.push(arr[f] * -1);
            }
            else {
                x.push(arr[f]);
            }
        }
        finalarr.push(x);
        arr[k] = R[j];
        var x = [];
        for (var f = 0; f < arr.length; f++) {
            if (f === m + 1 + j || f === k) {
                x.push(arr[f] * -1);
            }
            else {
                x.push(arr[f]);
            }
        }
        finalarr.push(x);
        j++;
        k++;
    }
    }
function mergeSort(arr, l, r, finalarr) {
    if (l >= r) {
        return;
    }
    var m = l + parseInt((r - l) / 2);
    mergeSort(arr, l, m, finalarr);
    mergeSort(arr, m + 1, r, finalarr);
    merge(arr, l, m, r, finalarr);
}
function ms(bars,addit) {
    var array = []
    var finalarr = []
    for (var i = 0; i < bars.length; i++) {
        array.push(bars[i])
    }
    mergeSort(array, 0, bars.length - 1, finalarr);
    finalarr.push(array);
    printit(addit,finalarr);
}


export { selection,bubble,insertion,ms};   