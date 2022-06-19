class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
    addNodeAtEnd(data) {
      let node = new Node(data);
      if (this.head == null) {
        this.head = node;
      } else {
        let temp = this.head;
        while (temp.next) {
          temp = temp.next;
        }
        temp.next = node;
      }
    }
  
    addNodeAtPos(data, pos) {
      let node = new Node(data);
      if (this.head == null) {
        this.head = node;
      } else if (this.head.next == null) {
        this.head.next = node;
      } else {
        let cur = this.head; // 1 2 3 4
        let prev = null;
        let next = null;
        let count = 0;
        while (count != pos) {
          //t, f
          prev = cur; //1 3 4 5
          next = cur.next; //3 4 5
          cur = next; //3 4 5
          count++; //1
        }
        if (pos == 0) {
          node.next = this.head;
          this.head = node;
          return null;
        }
        node.next = next;
        prev.next = node;
      }
    }
  
    print() {
      let bag = '';
      let temp = this.head;
      while (temp) {
        bag += temp.data + ' ';
        temp = temp.next;
      }
      console.log(bag);
    }
  
    checkWavePattern(){
      let temp = this.head;
      let toggal;
      if(temp.data > temp.next.data){
          toggal = "up"
      }else{
          toggal = "down"
      }
      while(temp.next.next){
          temp = temp.next
          if(toggal=="up"){
              if(temp.data>temp.next.data){
                  return false
              }else{
                  toggal = "down"
              }
          }else{
              if(temp.data<temp.next.data){
                  return false
              }else{
                  toggal = "up"
              }
          }
      }
      return true;
    }

    reverse(){
       // reverse
       let temp = this.head;
       let prev = null;
       let next = null;
       while(temp){
           next = temp.next
           temp.next = prev;
           prev = temp;
           temp = next;
       }
       this.head = prev
    }
    addOne(){
        this.reverse();
        let temp = this.head;
        let carry=1;
        while(temp&&carry>0){
          let flag = temp.data
          if(temp.next!=null){
            temp.data = (temp.data+carry)%10;//0, 3
            carry = Math.floor((flag+carry)/10)//0+1
          }else{
            temp.data++
          }
          console.log(carry);
          temp = temp.next;//
        }
        this.reverse()
    }
    selectionSort(){
        let first = this.head;
        let second = this.head.next
        for(let i=0;first!=null;first=first.next){
            for(let j=i+1;second!=null;second=second.next){
                 if(first.data>second.data){
                    let temp = first.data
                    first.data = second.data
                    second.data = temp
                 }
            }
            i++
        }
    }
  }
  let l1 = new LinkedList();
  l1.addNodeAtEnd(2);
  l1.addNodeAtEnd(1);
  l1.addNodeAtEnd(5);
  l1.addNodeAtEnd(4);
  l1.print();
  l1.selectionSort()
  l1.print();

  