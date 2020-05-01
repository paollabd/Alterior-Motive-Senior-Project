import React from "react";
import { Helmet } from 'react-helmet'
import Highlight from 'react-highlight'
import "./../style.css"
const TITLE = 'Ulterior Motive | HTML Code Snippets | Form Example'

const Forms = () => {
    return(
        <div className="container-html container-code-snippet">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="container">
                <div className="container-item">
                    <div className="container-item-center">
                        <h2>Forms</h2>  
                    </div>
                </div>

                <div className="container-item-topic">
                    <h2>Accessible Forms</h2>
                    <ul>
                        <li>Do not use auto-advance in your form. (This is terrible for people with disabilities – don’t do it)!</li>
                        <li>Ideally, present only one or two inputs per line for users with limited vision who have trouble scanning the screen horizontally.</li>
                        <li>Each fieldset should have a legend element (directly under the first fieldset tag) that describes the grouping.</li>
                        <li>Every input element in a form should have a related label. You can either have a hybrid label (these are labels that surround their associated input), which is recommended for accessibility, or an explicit label (these are labels which precede or are adjacent to their corresponding input).</li>
                    </ul>
                    <h2>Code Snippets</h2>
                    <ul>
                        <li>Below is the code snippet for a variety of accessible form inputs created by  <a href="http://web-accessibility.carnegiemuseums.org/code/forms/">Web Accessibility Guidelines v1.0</a>. Please visit their website for more detailed information.</li>
                    </ul>
                    <h2>HTML</h2>
                    <div className="code-block">
                    <Highlight className='html'>
                    {"<!DOCTYPE html>"}<br/>
                    {"<html>"}<br/>
                    {"<head>"}<br/>
                    {"    <title>Accessible Forms</title>"}<br/>
                    {"    <link rel='stylesheet' href='style.css'>"}<br/>
                    {"</head>"}<br/>
                    {"<body>"}<br/>
                    {"    <form class='form-example' method='post'>"}<br/>
                    {"    <fieldset>"}<br/>
                    {"        <legend>Personal Information</legend>"}<br/>
                    {""}<br/>
                    {"        <label for='full-name'>"}<br/>
                    {"        Full Name"}<br/>
                    {"        <span class='required'>"}<br/>
                    {"            (required)"}<br/>
                    {"        </span>"}<br/>
                    {""}<br/>
                    {"        <span class='error-message'>"}<br/>
                    {"            You must input a real name."}<br/>
                    {"        </span>"}<br/>
                    {""}<br/>
                    {"        <input id='full-name' name='full-name' required='' type='text'>"}<br/>
                    {""}<br/>
                    {"        </label>"}<br/>
                    {""}<br/>
                    {"        <label for='email'>"}<br/>
                    {"        Email"}<br/>
                    {"        <span class='required'>"}<br/>
                    {"            (required)"}<br/>
                    {"        </span>"}<br/>
                    {""}<br/>
                    {"        <span class='error-message'>"}<br/>
                    {"            The email address you entered is not valid."}<br/>
                    {"        </span>"}<br/>
                    {""}<br/>
                    {"        <input id='email' name='email' required='' type='email'>"}<br/>
                    {""}<br/>
                    {"        </label>"}<br/>
                    {""}<br/>
                    {"    </fieldset>"}<br/>
                    {""}<br/>
                    {"    <fieldset>"}<br/>
                    {"        <legend>Credit Card Information</legend>"}<br/>
                    {""}<br/>
                    {"        <label for='cc'>"}<br/>
                    {"        Credit Card Number"}<br/>
                    {"        <span class='required'>"}<br/>
                    {"            (required)"}<br/>
                    {"        </span>"}<br/>
                    {""}<br/>
                    {"        <span class='error-message'>"}<br/>
                    {"            Your credit card number should be all numbers."}<br/>
                    {"        </span>"}<br/>
                    {""}<br/>
                    {"        <input id='cc' name='cc' required='' type='text' minlength='13' maxlength='20' pattern='\s*[0-9]+-?\s*[0-9]+-?\s*[0-9]+-?\s*[0-9]+-?\s*'>"}<br/>
                    {""}<br/>
                    {"        </label>"}<br/>
                    {"    </fieldset>"}<br/>
                    {""}<br/>
                    {"    <fieldset>"}<br/>
                    {"        <label for='text-comments'>"}<br/>
                    {"        Please leave your comments or questions here"}<br/>
                    {"        <span class='required'>"}<br/>
                    {"            (required)"}<br/>
                    {"        </span>"}<br/>
                    {""}<br/>
                    {"        <span class='error-message'>"}<br/>
                    {"            Please give us a little more information about your inquiry."}<br/>
                    {"        </span>"}<br/>
                    {""}<br/>
                    {"        <textarea id='text-comments' required=''></textarea>"}<br/>
                    {"        </label>"}<br/>
                    {"    </fieldset>"}<br/>
                    {""}<br/>
                    {"    <fieldset>"}<br/>
                    {"        <legend id='legend-1'>Can we add you to our email mailing list? <span class='required'>(required)</span></legend>"}<br/>
                    {""}<br/>
                    {"        <ul aria-labelledby='legend-1' role='radiogroup'>"}<br/>
                    {"        <li>"}<br/>
                    {"            <label for='yes'>"}<br/>
                    {"            <span class='error-message'>"}<br/>
                    {"                Please select yes or no."}<br/>
                    {"            </span>"}<br/>
                    {""}<br/>
                    {"            <input id='yes' required='' type='radio' name='answers' value='yes'>"}<br/>
                    {""}<br/>
                    {"           Yes"}<br/>
                    {"            </label>"}<br/>
                    {"        </li>"}<br/>
                    {"        <li>"}<br/>
                    {"            <label for='no'>"}<br/>
                    {"            <input id='no' type='radio' name='answers' value='no'>"}<br/>
                    {""}<br/>
                    {"            No"}<br/>
                    {"            </label>"}<br/>
                    {"        </li>"}<br/>
                    {"        </ul>"}<br/>
                    {"    </fieldset>"}<br/>
                    {""}<br/>
                    {"    <fieldset>"}<br/>
                    {"        <legend id='legend-2'>Which topics interest you? <span class='required'>(required)</span></legend>"}<br/>
                    {""}<br/>
                    {"        <ul aria-labelledby='legend-2' role='group'>"}<br/>
                    {"        <li>"}<br/>
                    {"            <label for='science'>"}<br/>
                    {"            <span class='error-message'>"}<br/>
                    {"                Please select at least one category."}<br/>
                    {"            </span>"}<br/>
                    {""}<br/>
                    {"            <input id='science' required='' type='checkbox' name='categories' value='science'>"}<br/>
                    {""}<br/>
                    {"           Science"}<br/>
                    {"            </label>"}<br/>
                    {"        </li>"}<br/>
                    {"        <li>"}<br/>
                    {"            <label for='children-programs'>"}<br/>
                    {"            <input id='children-programs' required='' type='checkbox' name='categories' value='children-programs'>"}<br/>
                    {""}<br/>
                    {"            Programs for Children"}<br/>
                    {"            </label>"}<br/>
                    {"        </li>"}<br/>
                    {"        <li>"}<br/>
                    {"            <label for='new-events'>"}<br/>
                    {"            <input id='new-events' required='' type='checkbox' name='categories' value='new-events">''}<br/>
                    {""}<br/>
                    {"            New Events"}<br/>
                    {"           </label>"}<br/>
                    {"        </li>"}<br/>
                    {"        </ul>"}<br/>
                    {"    </fieldset>"}<br/>
                    {""}<br/>
                    {"    <fieldset>"}<br/>
                    {"        <label for='options'>Choose from the following:"}<br/>
                    {"        <span class='required'>"}<br/>
                    {"            (required)"}<br/>
                    {"        </span>"}<br/>
                    {""}<br/>
                    {"        <span class='error-message'>"}<br/>
                    {"            Please choose one of the following options."}<br/>
                    {"        </span>"}<br/>
                    {"        <select name='options' id='options' required=''>"}<br/>
                    {"            <option value=''> Select </option>"}<br/>
                    {"            <option value='value1'>Option A</option>"}<br/>
                    {"            <option value='value2'>Option B</option>"}<br/>
                    {"            <option value='value3'>Option C</option>"}<br/>
                    {"        </select>"}<br/>
                    {"        </label>"}<br/>
                    {"    </fieldset>"}<br/>
                    {""}<br/>
                    {"    <button class='form-example-submit' type='submit'>Submit Form</button>"}<br/>
                    {"    </form>"}<br/>
                    {"</body>"}<br/>
                    {"</html>"}
                </Highlight>
                </div>              
                <h2>CSS</h2>
                <div className="code-block">
                    <Highlight className='html'>
                    {"input.edited:invalid {"}<br/>
                    {"  box-shadow: 0 0 5px 1px red;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {"input:focus:invalid {"}<br/>
                    {"  outline: none;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                </Highlight>
                </div>
                <h2>JS</h2>
                <div className="code-block">
                <Highlight className='javascript'>
                {"function handleFormSubmission(){"}<br/>
                {"$('.form-example input').on('keyup', function(e){"}<br/>
                {"    $(this).addClass('edited');"}<br/>
                {"});"}<br/>
                {""}<br/>
                {"$('.form-example [type='submit']').on('click.formValidation', function(e){"}<br/>
                {"    shouldPrevent = false;"}<br/>
                {"    errorList = [];"}<br/>
                {""}<br/>
                {"    $form = $(this).parents('form');"}<br/>
                {"    $inputs = $form.find('input[required], textarea[required], select[required]');"}<br/>
                {""}<br/>
                {"    $inputs.each(function(index, input){"}<br/>
                {"    errorMessageSelector = 'label[for=' + $(input).attr('id') + '] .error-message';"}<br/>
                {"    $form.find(errorMessageSelector).removeAttr('aria-live');"}<br/>
                {"    error = $form.find(errorMessageSelector);"}<br/>
                {"    error.css('display', 'none');"}<br/>
                {""}<br/>
                {"    if(!input.validity.valid){"}<br/>
                {"        error.css('display', 'inline-block');"}<br/>
                {"        shouldPrevent = true;"}<br/>
                {"        errorList.push(error);"}<br/>
                {""}<br/>
                {"    }"}<br/>
                {"    else {"}<br/>
                {"        error.css('display', 'none');"}<br/>
                {"    }"}<br/>
                {"    });"}<br/>
                {""}<br/>
                {"    if(!$form[0].checkValidity()){"}<br/>
                {"    e.preventDefault();"}<br/>
                {"    errorList[0].attr('aria-live', 'assertive');"}<br/>
                {"    }"}<br/>
                {"});"}<br/>
                {"}"}<br/>
                {""}<br/>
                {"$(document).ready(function(){"}<br/>
                    {"handleFormSubmission();"}<br/>
                {"});"}<br/>
                {""}<br/>
                </Highlight>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Forms;