update_code = ->
    username = if $('#username').val().length then $('#username').val() else 'forrst'
    url = window.location.origin + '/' + username

    if $('#count').is(':not(:checked)')
        url += '?count=false'

    $('#preview iframe').attr 'src', url

    $('textarea').text '<iframe src="' + url + '" width="240" height="20">'

    clearTimeout timeout

timeout = null

$ ->
    $('input:checkbox').on 'change', update_code
    $('input:text').on 'blur change', update_code
    $('input:text').on 'input keyup', ->
        clearTimeout timeout

        timeout = setTimeout update_code, 500

    $('textarea').click ->
        $(this).select()

    update_code()
