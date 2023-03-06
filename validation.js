$(document).ready(function () {
    var name_err = true;
    var nuber_err = true;
    var mail_err = true;
    var no_err = true;
    var book_err = true;
    var add_err = true;
    //  --------------name validation-------------
    $("#name").keyup(function () {
        nameCheck();
    })

    function nameCheck() {
        let name = $("#name").val();

        if (name.length == '') {
            $("#namecheck").html("*enter name ")
            return false;
            name_err = false;
        }
        else {
            $("#namecheck").html("")

        }
        if (!isNaN(name)) {
            $("#namecheck").html("*enter characters only ")
            return false;
            name_err = false;
        }
        else {
            $("#namecheck").html("")

        }
    }
    // -------------number validation--------------
    $("#number").keyup(function () {
        numberCheck();
    })

    function numberCheck() {
        let num = $("#number").val()

        if (num.length == '') {
            $("#numbercheck").html("*enter number ")
            return false;
            nuber_err = false;
        }
        else {
            $("#numbercheck").html("")
        }
        if (isNaN(num)) {
            $("#numbercheck").html("*enter number only ")
            return false;
            nuber_err = false;
        }
        else {
            $("#numbercheck").html("")

        }
    }

    // ---------------Email validation------------
    $("#email").keyup(function () {
        emailCheck();
    })

    function emailCheck() {
        let email = $("#email").val()
        let mailcheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email.length == '') {
            $("#emailcheck").html("*enter Email ")
            return false;
            mail_err = false;
        }
        else {
            $("#emailcheck").html("")
        }
        if (email.match(mailcheck)) {
            $("#emailcheck").html("")
            return true;
            mail_err = false;
        }
        else {
            $("#emailcheck").html("*enter valid email")
        }
    }
    // -------------book no & name validation--------------
    $("#bookno").keyup(function () {
        booknoCheck();
    })

    function booknoCheck() {
        let no = $("#bookno").val()

        if (no.length == '') {
            $("#booknocheck").html("*enter Book Serial no. ")
            return false;
            no_err = false;
        }
        else {
            $("#booknocheck").html("")
        }
    }
    $("#book").keyup(function () {
        bookCheck();
    })
    function bookCheck() {
        let book = $("#book").val()

        if (book.length == '') {
            $("#bookcheck").html("*Enter Book Name ")
            return false;
            book_err = false;
        }
        else {
            $("#bookcheck").html("")
        }
    }

    // -----------address validation-----------
    $("#address").keyup(function () {
        addressCheck();
    })
    function addressCheck() {
        let address = $("#address").val()

        if (address.length == '') {
            $("#addresscheck").html("*Enter Address ")
            return false;
            add_err = false;
        }
        else {
            $("#addresscheck").html("")
        }
    }

    $("#submit").click(function(){
        if(!numberCheck() && !nameCheck() || !emailCheck() || !booknoCheck() || !bookCheck() || !addressCheck()){
            return false;
        }
    })

    // $("#submit").click(function () {

    //     name_err = true;
    //     nuber_err = true;
    //     mail_err = true;
    //     no_err = true;
    //     book_err = true;
    //     add_err = true;

    //     nameCheck();
    //     numberCheck();
    //     emailCheck();
    //     booknoCheck();
    //     bookCheck();
    //     addressCheck();

    //     if ((name_err == true) && (nuber_err == true) && (mail_err == true) && (no_err == true) && (book_err == true) && (add_err == true)) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // })
})