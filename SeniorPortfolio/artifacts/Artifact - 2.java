//Dennis Marchuk

import java.util.Scanner;

public class Array2D
{
   static int[][] intArray;
   
   public static void main(String[] args)
   {
      int choice = 0;
      boolean flag = true;
      int rows, col;
      Scanner scan = new Scanner(System.in);
      double average = 0;
      double count = 0;
      System.out.println("The CSCI200 array precessor");
      
      System.out.print("How many rows? ");
      rows = scan.nextInt();
      System.out.print("\nHow many columns? ");
      col = scan.nextInt();
      intArray = new int[rows][col];   
      // create a 2D array
      
      getData(scan, rows, col);
      
      
      while(flag)
      {
         choice = printMenu(scan);
         
         switch(choice)
         {
            case 1:
            {
               printArray(intArray);
               break;
            }
            case 2:
            {
               calcAve(rows, col, average, count);
               break;
            }
            case 3:
            {
               System.out.print("Which row? ");
               System.out.println();
               int row = scan.nextInt();
               total(row, false);
               break;
            }
            case 4:
            {
               System.out.print("Which column? ");
               System.out.println();
               int num = scan.nextInt();
               total(num, true);
               break;
   
            }
            case 5:
            {
               highSearch(true);
               break;
            }
            case 6:
            {
               lowSearch();
               break;
            }
            case 9:
            {
               flag = false;
               break;
            }
            default:
            {
               System.out.println("Not a menu choice - try again");
               break;
            }   
            
         }// end switch
         
      }// end loop
      
   }// end main
   
   public static int printMenu(Scanner kb)
   {
      int result = 0;
         
      System.out.println("\nPick an item");
      System.out.println("\t1. Print array");
      System.out.println("\t2. Calculate the average");
      System.out.println("\t3. Total row number: " );
      System.out.println("\t4. Total Column number: ");
      System.out.println("\t5. Find Highest item");
      System.out.println("\t6. Find lowest item");
      System.out.println("\t9. Quit");
         
      result = kb.nextInt();
      return result;   
   }
   
   public static void getData(Scanner kb, int rows, int col)
   {
     
     for(int columns = 0; columns < col; columns++)
		{
			for(int row = 0; row < rows; row++)
			{
			   System.out.print("What number do you want in Row " + (row+1) + " column " + (columns+1) + "? "); 
            int counter = kb.nextInt();
				intArray[row][columns] = counter;
			}
		}
     
   }
   
   public static void printArray(int[][] intArray)
   {
      for(int loop = 0; loop < intArray.length; loop++)
      {
         for(int inner = 0; inner < intArray[loop].length; inner++)
         {
            System.out.print(intArray[loop][inner] + "\t");
         }
      System.out.println();   
      }   
   }
   
   public static void calcAve(int rows, int col, double average, double count)
   {
    
    int sum = 0;              
    for(int columns = 0; columns < col; columns++)
		{
			for(int row = 0; row < rows; row++)
			{

            sum += intArray[row][columns];
            count++;
          

        }
      }
       average = sum / count;
       System.out.println("Average value of array elements is : " + average);
    }
   
   public static void total(int num, boolean col)
   {
      double sum = 0;
      if (col == true)     //column
      {
         {
            for (int i = 0; i < intArray.length; i++)
            sum += intArray[i][num];
         }
            System.out.print(sum);
      }
      if (col == false)     //row
      {
         {
            for (int i = 0; i < intArray.length; i++)
            sum += intArray[num][i];
         }
            System.out.print(sum);
      }
   
   }
   public static void highSearch(boolean high)
   {
    
    {
    int maxValue = 1;
    System.out.println("\nMax value in Array2D: ");
    for (int row = 0; row < intArray.length; row++) 
      {
        for (int col = 0; col < intArray.length; col++)
        {
            if (intArray[row][col] > maxValue) 
            {
               maxValue = intArray[row][col];
               }
                 
               }
          
      }
      System.out.println(maxValue);
     }      
     }
  

   public static void lowSearch()
     {
    int lowValue = 1;
    System.out.println("\nLowest value in Array2D: ");
    for (int row = 0; row < intArray.length; row++) 
      {
        for (int col = 0; col < intArray.length; col++)
        {
            if (intArray[row][col] < lowValue) 
            {
               lowValue = intArray[row][col];
               }
                 
        }
      }
      System.out.println(lowValue);}
               
     }
