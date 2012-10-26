package com.enonic.cms.core.portal.datasource.handler.menu;

import org.jdom.Document;
import org.springframework.stereotype.Component;

import com.enonic.cms.core.portal.datasource.handler.DataSourceRequest;
import com.enonic.cms.core.portal.datasource.handler.base.ParamDataSourceHandler;

@Component("ds.GetMenuItemHandler")
public final class GetMenuItemHandler
    extends ParamDataSourceHandler
{
    public GetMenuItemHandler()
    {
        super( "getMenuItem" );
    }

    @Override
    public Document handle( final DataSourceRequest req )
        throws Exception
    {
        final int menuItemKey = param( req, "menuItemKey" ).required().asInteger();
        final boolean withParents = param( req, "withParents" ).asBoolean( false );

        return this.dataSourceService.getMenuItem( req, menuItemKey, withParents ).getAsJDOMDocument();
    }
}