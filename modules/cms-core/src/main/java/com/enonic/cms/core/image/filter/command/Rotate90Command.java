/*
 * Copyright 2000-2013 Enonic AS
 * http://www.enonic.com/license
 */
package com.enonic.cms.core.image.filter.command;

import com.jhlabs.image.FlipFilter;

import com.enonic.cms.core.image.filter.BuilderContext;

public final class Rotate90Command
    extends FilterCommand
{
    public Rotate90Command()
    {
        super( "rotate90" );
    }

    protected Object doBuild( BuilderContext context, Object[] args )
    {
        return new FlipFilter( FlipFilter.FLIP_90CW );
    }
}
