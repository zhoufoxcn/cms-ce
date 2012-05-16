/*
 * Copyright 2000-2011 Enonic AS
 * http://www.enonic.com/license
 */
package com.enonic.cms.web.portal;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;
import org.springframework.web.util.UrlPathHelper;

public class ErrorPageController
    extends AbstractController
{
    private final UrlPathHelper urlDecodingUrlPathHelper;

    public ErrorPageController()
    {
        setCacheSeconds( -1 );
        this.urlDecodingUrlPathHelper = new UrlPathHelper();
        this.urlDecodingUrlPathHelper.setUrlDecode( true );
    }

    protected ModelAndView handleRequestInternal( HttpServletRequest request, HttpServletResponse response )
        throws Exception
    {
        Map<String, String> model = new HashMap<String, String>();
        model.put( "contextPath", urlDecodingUrlPathHelper.getContextPath( request ) );
        Integer statusCode = (Integer) request.getAttribute( "vertical.error.statusCode" );
        put( model, "error_statusCode", request.getAttribute( "vertical.error.statusCode" ), "" );
        put( model, "error_message", request.getAttribute( "vertical.error.message" ), "" );
        put( model, "error_referer", request.getAttribute( "vertical.error.referer" ), "" );
        Throwable exception = (Throwable) request.getAttribute( "vertical.error.exception" );
        model.put( "error_stackTrace", stackTraceToString( exception ) );

        if ( statusCode == null || statusCode >= 500 )
        {
            return new ModelAndView( "serverError", model );
        }
        else
        {
            return new ModelAndView( "clientError", model );
        }
    }

    private void put( Map<String, String> map, String name, Object value, String defaultValue )
    {
        map.put( name, value != null ? value.toString() : defaultValue );
    }

    private String stackTraceToString( Throwable t )
    {
        if ( t == null )
        {
            return null;
        }
        StringWriter out = new StringWriter();
        t.printStackTrace( new PrintWriter( out ) );
        out.flush();
        return out.toString();
    }
}
