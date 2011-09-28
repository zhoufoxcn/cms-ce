/*
 * Copyright 2000-2011 Enonic AS
 * http://www.enonic.com/license
 */
package com.enonic.cms.store.dao;

import com.enonic.cms.domain.security.group.GroupKey;
import com.enonic.cms.domain.structure.DefaultSiteAccessEntity;
import org.springframework.stereotype.Repository;

@Repository("defaultSiteAccessDao")
public final class DefaultSiteAccessEntityDao
    extends AbstractBaseEntityDao<DefaultSiteAccessEntity>
    implements DefaultSiteAccessDao
{
    public void deleteByGroupKey( GroupKey groupKey )
    {
        deleteByNamedQuery( "DefaultSiteAccessEntity.deleteByGroupKey", "groupKey", groupKey );
    }
}
