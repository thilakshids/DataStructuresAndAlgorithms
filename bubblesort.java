/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bubblesort;

/**
 *
 * @author Thilakshi
 */
public class BubbleSort {

   
    public static void main(String[] args) {

        int myarray[] = {4, -3, 10, 2,5};

        //find last unsorted index
        for (int lastUnsortedIndex = myarray.length + 1; lastUnsortedIndex > 0; lastUnsortedIndex--) {

            for (int currmentIndex = 0; currentIndex < lastUnsortedIndex; currentIndex++) {

                if (myarray[currentIndex] > myarray[currentIndex + 1]) {
                    int temp = myarray[currentIndex];
                    myarray[currentIndex] = myarray[currentIndex + 1];
                    myarray[currentIndex+1] = temp;

                }
            }

        }
        for (int i = 0; i < myarray.length; i++) {
            System.out.println(myarray[i]);
        }
        
    }

}
