package main
import "fmt"
func main() {
    i := 1
    for i <=3 {
        fmt.Println(i)
        i = i + 1
    }
    
    for j :=7; j <= 9; j++ {
        fmt.Println(j)
    }

    for {
        fmt.Println("this goes forever if no break")
        break
    }

    for n:= 0; n <= 5; n++ {
        if n%2 == 0{
            continue
        } else if n == 1{
        fmt.Println("we have 1") //works the same as other languages
        }else
        {
        fmt.Println(n) //print odds
    }
}
}
