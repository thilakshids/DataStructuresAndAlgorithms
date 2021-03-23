/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ordarray1;

public class OrdArray1 {

    private long a[];
    private int nElements;
    
    public static void main(String[] args) {
      OrdArray1 t = new OrdArray1(4);
      t.insert(4);
      t.insert(50);
      t.insert(48);
      t.display();
      t.delete(48);
       t.display();
    }
    
    public OrdArray1(int max){
        this.a = new long [max];
        this.nElements=0;
    }
   
    public int size(){// return the max size of the array
       int length=this.a.length;
        return length ;
    }
    
  public int find(long searchKey) {
      
      for(int i=0; i < this.nElements; i++){

         if(a[i]==searchKey){
               return i;
         }    
      }
      return -1;    
 }
  
  public void insert(long value) { // put element into arrray

      if(this.nElements == a.length){
          System.out.println("Array is Full can't insert values");
          return ;
   }
     for(int i=0; i< this.nElements; i++){
         if(a[i]>value){

             for(int j=this.nElements-1;j>=i;j--){
             this.a[j+1]=this.a[j];
             }
             this.a[i]= value;
             this.nElements ++;
             return ;
         }
     }
     a[this.nElements]=value;
     this.nElements++;
      }
  
  public boolean delete (long value){
      int index = find(value);
      
      for(int i = index; i < this.nElements-1;i++){
      this.a[i]=a[i+1];
      }
        this.nElements--;
        return true;
   }
  
  public void display(){
      System.out.println("------Values of the array--------");
      for(int i=0; i< this.nElements; i++){
          System.out.println(this.a[i]);
      }
  }
      
 }
    
    

