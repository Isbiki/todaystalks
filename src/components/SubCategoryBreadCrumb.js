import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SubCategoryBreadcrumb = ({ subCategories, title }) => {
  return (
    <>
      <div className='breadcrumb-area'>
        <div className='container content-container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='breadcrumb-content'>
                <nav aria-label='breadcrumb'>
                  <div className='sidebar-social-wrap'>
                    <ul class="list-wrap breadcrumb-item breadcrumb">
                      {subCategories.map((subCategory) => (
                        <li key={subCategory.id} >
                          <Link to={`/${subCategory.type2}/${subCategory.data_query}`} className={subCategory.name === title ? 'active' : ''}>
                            <span>{subCategory.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubCategoryBreadcrumb;
